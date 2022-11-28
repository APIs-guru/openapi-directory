import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MrssPeerLinkTypeEnum {
    ApplicationXBittorrent = "application/x-bittorrent"
}
export declare class MrssPeerLink extends SpeakeasyBase {
    href?: string;
    type?: MrssPeerLinkTypeEnum;
}
