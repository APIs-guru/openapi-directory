import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductViewDetail } from "./productviewdetail";
import { ProvisioningArtifactDetail } from "./provisioningartifactdetail";
import { Tag } from "./tag";
export declare class CreateProductOutput extends SpeakeasyBase {
    productViewDetail?: ProductViewDetail;
    provisioningArtifactDetail?: ProvisioningArtifactDetail;
    tags?: Tag[];
}
