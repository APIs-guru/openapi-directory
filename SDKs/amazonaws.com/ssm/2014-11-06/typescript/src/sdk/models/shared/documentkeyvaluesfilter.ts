import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentKeyValuesFilter
/** 
 * <p>One or more filters. Use a filter to return a more specific list of documents.</p> <p>For keys, you can specify one or more tags that have been applied to a document. </p> <p>You can also use Amazon Web Services-provided keys, some of which have specific allowed values. These keys and their associated values are as follows:</p> <dl> <dt>DocumentType</dt> <dd> <ul> <li> <p> <code>ApplicationConfiguration</code> </p> </li> <li> <p> <code>ApplicationConfigurationSchema</code> </p> </li> <li> <p> <code>Automation</code> </p> </li> <li> <p> <code>ChangeCalendar</code> </p> </li> <li> <p> <code>Command</code> </p> </li> <li> <p> <code>DeploymentStrategy</code> </p> </li> <li> <p> <code>Package</code> </p> </li> <li> <p> <code>Policy</code> </p> </li> <li> <p> <code>Session</code> </p> </li> </ul> </dd> <dt>Owner</dt> <dd> <p>Note that only one <code>Owner</code> can be specified in a request. For example: <code>Key=Owner,Values=Self</code>.</p> <ul> <li> <p> <code>Amazon</code> </p> </li> <li> <p> <code>Private</code> </p> </li> <li> <p> <code>Public</code> </p> </li> <li> <p> <code>Self</code> </p> </li> <li> <p> <code>ThirdParty</code> </p> </li> </ul> </dd> <dt>PlatformTypes</dt> <dd> <ul> <li> <p> <code>Linux</code> </p> </li> <li> <p> <code>Windows</code> </p> </li> </ul> </dd> </dl> <p> <code>Name</code> is another Amazon Web Services-provided key. If you use <code>Name</code> as a key, you can use a name prefix to return a list of documents. For example, in the Amazon Web Services CLI, to return a list of all documents that begin with <code>Te</code>, run the following command:</p> <p> <code>aws ssm list-documents --filters Key=Name,Values=Te</code> </p> <p>You can also use the <code>TargetType</code> Amazon Web Services-provided key. For a list of valid resource type values that can be used with this key, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the <i>CloudFormation User Guide</i>.</p> <p>If you specify more than two keys, only documents that are identified by all the tags are returned in the results. If you specify more than two values for a key, documents that are identified by any of the values are returned in the results.</p> <p>To specify a custom key-value pair, use the format <code>Key=tag:tagName,Values=valueName</code>.</p> <p>For example, if you created a key called region and are using the Amazon Web Services CLI to call the <code>list-documents</code> command: </p> <p> <code>aws ssm list-documents --filters Key=tag:region,Values=east,west Key=Owner,Values=Self</code> </p>
**/
export class DocumentKeyValuesFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
