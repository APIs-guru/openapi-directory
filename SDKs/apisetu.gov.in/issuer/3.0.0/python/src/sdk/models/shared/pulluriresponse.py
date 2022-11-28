from dataclasses import dataclass, field



@dataclass
class PullURIResponseDocDetails:
    r"""PullURIResponseDocDetails
    Issuer can add meta content specific to document here.
    """
    
    dob: str = field()
    data_content: str = field()
    digi_locker_id: str = field()
    doc_content: str = field()
    doc_type: str = field()
    full_name: str = field()
    udf1: str = field()
    udf2: str = field()
    uid: str = field()
    uri: str = field()
    

@dataclass
class PullURIResponseResponseStatus:
    status: str = field()
    ts: str = field()
    txn: str = field()
    

@dataclass
class PullURIResponse:
    doc_details: PullURIResponseDocDetails = field()
    response_status: PullURIResponseResponseStatus = field()
    
