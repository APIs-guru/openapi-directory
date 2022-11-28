import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStatusEnum } from "./applicationstatusenum";
import { CloudWatchLoggingOptionDescription } from "./cloudwatchloggingoptiondescription";
import { InputDescription } from "./inputdescription";
import { OutputDescription } from "./outputdescription";
import { ReferenceDataSourceDescription } from "./referencedatasourcedescription";
/**
 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p>
**/
export declare class ApplicationDetail extends SpeakeasyBase {
    applicationArn: string;
    applicationCode?: string;
    applicationDescription?: string;
    applicationName: string;
    applicationStatus: ApplicationStatusEnum;
    applicationVersionId: number;
    cloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
    createTimestamp?: Date;
    inputDescriptions?: InputDescription[];
    lastUpdateTimestamp?: Date;
    outputDescriptions?: OutputDescription[];
    referenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}
