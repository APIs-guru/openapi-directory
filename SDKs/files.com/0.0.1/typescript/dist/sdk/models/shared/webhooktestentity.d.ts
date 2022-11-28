import { SpeakeasyBase } from "../../../internal/utils";
import { AutoEntity } from "./autoentity";
/**
 * Create Webhook Test
**/
export declare class WebhookTestEntity extends SpeakeasyBase {
    code?: number;
    data?: AutoEntity;
    message?: string;
    status?: string;
    success?: boolean;
}
