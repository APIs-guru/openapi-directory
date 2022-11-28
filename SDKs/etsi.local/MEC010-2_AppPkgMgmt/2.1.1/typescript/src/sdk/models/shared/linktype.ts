import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LinkType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}
