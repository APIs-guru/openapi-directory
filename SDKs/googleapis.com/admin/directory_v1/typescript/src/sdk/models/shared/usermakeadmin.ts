import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserMakeAdmin extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: boolean;
}
