import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Api2ModelsPreference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EatingStyle, form, name=EatingStyle;" })
  eatingStyle?: string;
}
