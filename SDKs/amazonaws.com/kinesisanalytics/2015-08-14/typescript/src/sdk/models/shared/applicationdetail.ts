import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStatusEnum } from "./applicationstatusenum";
import { CloudWatchLoggingOptionDescription } from "./cloudwatchloggingoptiondescription";
import { InputDescription } from "./inputdescription";
import { OutputDescription } from "./outputdescription";
import { ReferenceDataSourceDescription } from "./referencedatasourcedescription";



// ApplicationDetail
/** 
 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p>
**/
export class ApplicationDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationARN" })
  applicationArn: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationCode" })
  applicationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationDescription" })
  applicationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationStatus" })
  applicationStatus: ApplicationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId: number;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptionDescriptions", elemType: CloudWatchLoggingOptionDescription })
  cloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

  @SpeakeasyMetadata({ data: "json, name=CreateTimestamp" })
  createTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=InputDescriptions", elemType: InputDescription })
  inputDescriptions?: InputDescription[];

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTimestamp" })
  lastUpdateTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=OutputDescriptions", elemType: OutputDescription })
  outputDescriptions?: OutputDescription[];

  @SpeakeasyMetadata({ data: "json, name=ReferenceDataSourceDescriptions", elemType: ReferenceDataSourceDescription })
  referenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}
