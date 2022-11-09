import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceSummary } from "./servicesummary";
export declare class ListServicesOutput extends SpeakeasyBase {
    nextToken?: string;
    services: ServiceSummary[];
}
