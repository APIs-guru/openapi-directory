import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=ApplicationARN" })
  applicationArn: string;

  @Metadata({ data: "json, name=ApplicationCode" })
  applicationCode?: string;

  @Metadata({ data: "json, name=ApplicationDescription" })
  applicationDescription?: string;

  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=ApplicationStatus" })
  applicationStatus: ApplicationStatusEnum;

  @Metadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId: number;

  @Metadata({ data: "json, name=CloudWatchLoggingOptionDescriptions", elemType: shared.CloudWatchLoggingOptionDescription })
  cloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

  @Metadata({ data: "json, name=CreateTimestamp" })
  createTimestamp?: Date;

  @Metadata({ data: "json, name=InputDescriptions", elemType: shared.InputDescription })
  inputDescriptions?: InputDescription[];

  @Metadata({ data: "json, name=LastUpdateTimestamp" })
  lastUpdateTimestamp?: Date;

  @Metadata({ data: "json, name=OutputDescriptions", elemType: shared.OutputDescription })
  outputDescriptions?: OutputDescription[];

  @Metadata({ data: "json, name=ReferenceDataSourceDescriptions", elemType: shared.ReferenceDataSourceDescription })
  referenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}
