import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeWorldResponse extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    generationJob?: string;
    tags?: Map<string, string>;
    template?: string;
    worldDescriptionBody?: string;
}
