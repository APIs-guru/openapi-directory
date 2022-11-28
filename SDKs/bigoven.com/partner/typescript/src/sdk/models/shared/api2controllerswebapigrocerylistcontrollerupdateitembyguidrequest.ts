import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=department, form, name=department;" })
  department?: string;

  @SpeakeasyMetadata({ data: "json, name=guid, form, name=guid;" })
  guid?: string;

  @SpeakeasyMetadata({ data: "json, name=ischecked, form, name=ischecked;" })
  ischecked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes, form, name=notes;" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity, form, name=quantity;" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=unit, form, name=unit;" })
  unit?: string;
}
