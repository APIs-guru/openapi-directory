import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductViewDetail } from "./productviewdetail";
import { ProvisioningArtifactDetail } from "./provisioningartifactdetail";
import { Tag } from "./tag";



export class CreateProductOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProductViewDetail" })
  productViewDetail?: ProductViewDetail;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactDetail" })
  provisioningArtifactDetail?: ProvisioningArtifactDetail;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
