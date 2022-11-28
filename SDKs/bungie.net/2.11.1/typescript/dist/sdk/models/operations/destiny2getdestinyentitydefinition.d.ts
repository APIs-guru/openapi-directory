import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destiny2GetDestinyEntityDefinitionPathParams extends SpeakeasyBase {
    entityType: string;
    hashIdentifier: number;
}
export declare class Destiny2GetDestinyEntityDefinitionRequest extends SpeakeasyBase {
    pathParams: Destiny2GetDestinyEntityDefinitionPathParams;
}
export declare class Destiny2GetDestinyEntityDefinitionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
