import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LinkType extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href: string;
}
