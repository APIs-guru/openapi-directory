import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



export class ListImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Images", elemType: Image })
  images?: Image[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
