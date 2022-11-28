import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetErrorDetails } from "./asseterrordetails";



export class BatchAssociateProjectAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: AssetErrorDetails })
  errors?: AssetErrorDetails[];
}
