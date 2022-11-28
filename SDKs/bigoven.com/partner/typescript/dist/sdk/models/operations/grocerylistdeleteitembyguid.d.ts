import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroceryListDeleteItemByGuidPathParams extends SpeakeasyBase {
    guid: string;
}
export declare class GroceryListDeleteItemByGuidRequest extends SpeakeasyBase {
    pathParams: GroceryListDeleteItemByGuidPathParams;
}
export declare class GroceryListDeleteItemByGuidResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
