import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BigOvenModelRecipeCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=Category" })
  category?: string;

  @Metadata({ data: "json, name=DefaultActiveMinutes" })
  defaultActiveMinutes?: number;

  @Metadata({ data: "json, name=DefaultTotalMinutes" })
  defaultTotalMinutes?: number;

  @Metadata({ data: "json, name=ID" })
  id?: number;

  @Metadata({ data: "json, name=ParentID" })
  parentId?: number;

  @Metadata({ data: "json, name=PrimaryImage" })
  primaryImage?: string;

  @Metadata({ data: "json, name=ShortDescription" })
  shortDescription?: string;
}
