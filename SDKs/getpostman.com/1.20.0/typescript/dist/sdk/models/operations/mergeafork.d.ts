import { SpeakeasyBase } from "../../../internal/utils";
export declare class MergeAForkRequestBody extends SpeakeasyBase {
    destination?: string;
    source?: string;
    strategy?: string;
}
export declare class MergeAForkRequest extends SpeakeasyBase {
    request?: MergeAForkRequestBody;
}
export declare class MergeAForkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
