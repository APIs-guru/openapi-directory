import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteApplicationCloudWatchLoggingOptionRequest extends SpeakeasyBase {
    applicationName: string;
    cloudWatchLoggingOptionId: string;
    conditionalToken?: string;
    currentApplicationVersionId?: number;
}
