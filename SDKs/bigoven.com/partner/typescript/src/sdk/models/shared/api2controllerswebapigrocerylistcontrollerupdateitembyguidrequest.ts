import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=department, form, name=department;" })
  department?: string;

  @Metadata({ data: "json, name=guid, form, name=guid;" })
  guid?: string;

  @Metadata({ data: "json, name=ischecked, form, name=ischecked;" })
  ischecked?: boolean;

  @Metadata({ data: "json, name=name, form, name=name;" })
  name?: string;

  @Metadata({ data: "json, name=notes, form, name=notes;" })
  notes?: string;

  @Metadata({ data: "json, name=quantity, form, name=quantity;" })
  quantity?: string;

  @Metadata({ data: "json, name=unit, form, name=unit;" })
  unit?: string;
}
