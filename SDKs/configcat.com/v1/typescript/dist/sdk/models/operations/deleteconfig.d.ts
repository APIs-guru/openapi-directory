import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteConfigPathParams extends SpeakeasyBase {
    configId: string;
}
export declare class DeleteConfigRequest extends SpeakeasyBase {
    pathParams: DeleteConfigPathParams;
}
export declare class DeleteConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
