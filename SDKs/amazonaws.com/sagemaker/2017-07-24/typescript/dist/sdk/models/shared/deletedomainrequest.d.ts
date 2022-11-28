import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionPolicy } from "./retentionpolicy";
export declare class DeleteDomainRequest extends SpeakeasyBase {
    domainId: string;
    retentionPolicy?: RetentionPolicy;
}
