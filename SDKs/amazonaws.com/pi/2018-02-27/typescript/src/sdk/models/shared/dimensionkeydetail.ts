import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DetailStatusEnum } from "./detailstatusenum";


// DimensionKeyDetail
/** 
 * An object that describes the details for a specified dimension.
**/
export class DimensionKeyDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dimension" })
  dimension?: string;

  @Metadata({ data: "json, name=Status" })
  status?: DetailStatusEnum;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
