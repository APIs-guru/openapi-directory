import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompatibleImage } from "./compatibleimage";



export class ListCompatibleImagesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompatibleImages", elemType: CompatibleImage })
  compatibleImages?: CompatibleImage[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
