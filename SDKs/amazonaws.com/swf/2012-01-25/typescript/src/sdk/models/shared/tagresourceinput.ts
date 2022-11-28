import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTag } from "./resourcetag";



export class TagResourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: ResourceTag })
  tags: ResourceTag[];
}
