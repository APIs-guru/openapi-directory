import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum {
    Single = "single"
,    Multiple = "multiple"
}


export class ModifierGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternate_name" })
  alternateName?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=maximum_allowed" })
  maximumAllowed?: number;

  @Metadata({ data: "json, name=minimum_required" })
  minimumRequired?: number;

  @Metadata({ data: "json, name=modifiers" })
  modifiers?: any[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=present_at_all_locations" })
  presentAtAllLocations?: boolean;

  @Metadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @Metadata({ data: "json, name=selection_type" })
  selectionType?: ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
