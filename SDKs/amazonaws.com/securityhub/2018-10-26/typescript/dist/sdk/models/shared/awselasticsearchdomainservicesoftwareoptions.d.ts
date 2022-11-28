import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the state of the domain relative to the latest service software.
**/
export declare class AwsElasticsearchDomainServiceSoftwareOptions extends SpeakeasyBase {
    automatedUpdateDate?: string;
    cancellable?: boolean;
    currentVersion?: string;
    description?: string;
    newVersion?: string;
    updateAvailable?: boolean;
    updateStatus?: string;
}
