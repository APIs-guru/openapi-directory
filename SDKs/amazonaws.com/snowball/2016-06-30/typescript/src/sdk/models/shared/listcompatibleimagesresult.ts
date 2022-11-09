import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CompatibleImage } from "./compatibleimage";


export class ListCompatibleImagesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompatibleImages", elemType: shared.CompatibleImage })
  compatibleImages?: CompatibleImage[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
