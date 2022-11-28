import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudioComponentSubtypeEnum } from "./studiocomponentsubtypeenum";
import { StudioComponentTypeEnum } from "./studiocomponenttypeenum";



export class StudioComponentSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=studioComponentId" })
  studioComponentId?: string;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: StudioComponentSubtypeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: StudioComponentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: string;
}
