import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Enterprise } from "./enterprise";



export class EnterprisesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enterprise", elemType: Enterprise })
  enterprise?: Enterprise[];
}
