import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Name } from "./name";



export class DistrictAdmin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=district" })
  district?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: Name;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
