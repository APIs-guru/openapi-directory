import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1Violation } from "./googlecloudassuredworkloadsv1violation";
/**
 * Response of ListViolations endpoint.
**/
export declare class GoogleCloudAssuredworkloadsV1ListViolationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    violations?: GoogleCloudAssuredworkloadsV1Violation[];
}
