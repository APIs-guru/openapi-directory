import { SpeakeasyBase } from "../../../internal/utils";
export declare class PlayersUploadLogoPayloadFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PlayersUploadLogoPayload extends SpeakeasyBase {
    file: PlayersUploadLogoPayloadFile;
    link: string;
}
