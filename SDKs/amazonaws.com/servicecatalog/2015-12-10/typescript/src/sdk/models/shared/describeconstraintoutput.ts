import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConstraintDetail } from "./constraintdetail";
import { StatusEnum } from "./statusenum";


export class DescribeConstraintOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConstraintDetail" })
  constraintDetail?: ConstraintDetail;

  @Metadata({ data: "json, name=ConstraintParameters" })
  constraintParameters?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StatusEnum;
}
