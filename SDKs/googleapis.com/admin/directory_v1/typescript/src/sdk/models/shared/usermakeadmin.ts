import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserMakeAdmin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: boolean;
}
