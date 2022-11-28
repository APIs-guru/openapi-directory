import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The IAM principal that you allowing or denying access to an Amazon Lex action. You must provide a <code>service</code> or an <code>arn</code>, but not both in the same statement. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html"> AWS JSON policy elements: Principal </a>.
**/
export declare class Principal extends SpeakeasyBase {
    arn?: string;
    service?: string;
}
