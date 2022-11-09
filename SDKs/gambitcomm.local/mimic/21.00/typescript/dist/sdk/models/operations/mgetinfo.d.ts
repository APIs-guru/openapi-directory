import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class MgetInfoPathParams extends SpeakeasyBase {
    infoArray: string[];
}
export declare class MgetInfoRequest extends SpeakeasyBase {
    pathParams: MgetInfoPathParams;
}
export declare class MgetInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mgetInfo200ApplicationJsonObjects?: Map<string, any>[];
}
