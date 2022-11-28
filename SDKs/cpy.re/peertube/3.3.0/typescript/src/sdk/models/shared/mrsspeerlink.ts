import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MrssPeerLinkTypeEnum {
    ApplicationXBittorrent = "application/x-bittorrent"
}


export class MrssPeerLink extends SpeakeasyBase {
  @SpeakeasyMetadata()
  href?: string;

  @SpeakeasyMetadata()
  type?: MrssPeerLinkTypeEnum;
}
