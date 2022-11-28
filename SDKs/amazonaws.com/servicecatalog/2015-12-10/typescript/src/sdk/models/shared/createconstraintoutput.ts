import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConstraintDetail } from "./constraintdetail";
import { StatusEnum } from "./statusenum";



export class CreateConstraintOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConstraintDetail" })
  constraintDetail?: ConstraintDetail;

  @SpeakeasyMetadata({ data: "json, name=ConstraintParameters" })
  constraintParameters?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusEnum;
}
