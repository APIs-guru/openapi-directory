import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BigOvenModelRecipeCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultActiveMinutes" })
  defaultActiveMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=DefaultTotalMinutes" })
  defaultTotalMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=ParentID" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=PrimaryImage" })
  primaryImage?: string;

  @SpeakeasyMetadata({ data: "json, name=ShortDescription" })
  shortDescription?: string;
}
