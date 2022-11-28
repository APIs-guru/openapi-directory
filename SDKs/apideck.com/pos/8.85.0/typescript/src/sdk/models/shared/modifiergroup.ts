import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum {
    Single = "single",
    Multiple = "multiple"
}


export class ModifierGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternate_name" })
  alternateName?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=maximum_allowed" })
  maximumAllowed?: number;

  @SpeakeasyMetadata({ data: "json, name=minimum_required" })
  minimumRequired?: number;

  @SpeakeasyMetadata({ data: "json, name=modifiers" })
  modifiers?: any[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=present_at_all_locations" })
  presentAtAllLocations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=selection_type" })
  selectionType?: ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}


export class ModifierGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternate_name" })
  alternateName?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maximum_allowed" })
  maximumAllowed?: number;

  @SpeakeasyMetadata({ data: "json, name=minimum_required" })
  minimumRequired?: number;

  @SpeakeasyMetadata({ data: "json, name=modifiers" })
  modifiers?: any[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=present_at_all_locations" })
  presentAtAllLocations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=selection_type" })
  selectionType?: ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum;
}
