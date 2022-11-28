import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorModelFaultDetail extends SpeakeasyBase {
    errorcode?: string;
}
export declare class ErrorModelFault extends SpeakeasyBase {
    detail?: ErrorModelFaultDetail;
    faultString?: string;
}
export declare class ErrorModel extends SpeakeasyBase {
    fault?: ErrorModelFault;
}
