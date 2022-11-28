import { SpeakeasyBase } from "../../../internal/utils";
import { Tender } from "./tender";
export declare class GetTenderResponse extends SpeakeasyBase {
    data: Tender;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
