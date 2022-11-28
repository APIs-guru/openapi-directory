import { SpeakeasyBase } from "../../../internal/utils";
import { EnabledServicePrincipal } from "./enabledserviceprincipal";
export declare class ListAwsServiceAccessForOrganizationResponse extends SpeakeasyBase {
    enabledServicePrincipals?: EnabledServicePrincipal[];
    nextToken?: string;
}
