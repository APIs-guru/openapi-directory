from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OutputConfig:
    r"""OutputConfig
    <p>Sets whether or not your output will go to a user created bucket. Used to set the name of the bucket, and the prefix on the output file.</p> <p> <code>OutputConfig</code> is an optional parameter which lets you adjust where your output will be placed. By default, Amazon Textract will store the results internally and can only be accessed by the Get API operations. With OutputConfig enabled, you can set the name of the bucket the output will be sent to and the file prefix of the results where you can download your results. Additionally, you can set the <code>KMSKeyID</code> parameter to a customer master key (CMK) to encrypt your output. Without this parameter set Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3.</p> <p>Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see <a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html\"> Managing AI services opt-out policy. </a> </p> <p>For more information on data privacy, see the <a href=\"https://aws.amazon.com/compliance/data-privacy-faq/\">Data Privacy FAQ</a>.</p>
    """
    
    s3_bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Bucket') }})
    s3_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Prefix') }})
    
