import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1beta1Violation } from "./googlecloudassuredworkloadsv1beta1violation";
/**
 * Response of ListViolations endpoint.
**/
export declare class GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    violations?: GoogleCloudAssuredworkloadsV1beta1Violation[];
}
