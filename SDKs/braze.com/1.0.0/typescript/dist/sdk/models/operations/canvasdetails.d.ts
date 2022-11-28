import { SpeakeasyBase } from "../../../internal/utils";
export declare class CanvasDetailsQueryParams extends SpeakeasyBase {
    canvasId?: string;
}
export declare class CanvasDetailsRequest extends SpeakeasyBase {
    queryParams: CanvasDetailsQueryParams;
}
export declare class CanvasDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
