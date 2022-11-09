import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CollectionConfiguration } from "./collectionconfiguration";


// DebugHookConfig
/** 
 * Configuration information for the Debugger hook parameters, metric and tensor collections, and storage paths. To learn more about how to configure the <code>DebugHookConfig</code> parameter, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
**/
export class DebugHookConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionConfigurations", elemType: shared.CollectionConfiguration })
  collectionConfigurations?: CollectionConfiguration[];

  @Metadata({ data: "json, name=HookParameters" })
  hookParameters?: Map<string, string>;

  @Metadata({ data: "json, name=LocalPath" })
  localPath?: string;

  @Metadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;
}
