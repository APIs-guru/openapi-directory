import { SpeakeasyBase } from "../../../internal/utils";
import { AutoEntity } from "./autoentity";
import { ErrorsEntity } from "./errorsentity";
/**
 * Test webhook.
**/
export declare class StatusEntity extends SpeakeasyBase {
    clickwrapBody?: string;
    clickwrapId?: number;
    code?: number;
    data?: AutoEntity;
    errors?: ErrorsEntity;
    message?: string;
    status?: string;
}
